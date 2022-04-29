import React, { FC, useEffect, useState, useRef } from 'react'
import { Icon, IconSize } from '@blueprintjs/core'

import style from './style.scss'
const duplicateFinder = ({ bp, languages, defaultLanguage, contentLang }) => {
  const [qna, setQNA] = useState()
  const [isOpened, setIsOpened] = useState(false)
  const [questionsArray, setQuestionsArray] = useState([])
  const [resultsArray, setResultsArray] = useState([])
  const [outputArray, setOutputArray] = useState([])
  const [loadingStatus, setLoadingStatus] = useState('Loading & Scanning')
  const [currentID, setCurrentID] = useState()
  const [modalQuestionList, setModalQuestionList] = useState([])
  const [contexts, setContexts] = useState()
  const [lang, setLang] = useState(defaultLanguage)

  const modal = useRef()
  const modalTitle = useRef()
  const modalContent = useRef()
  const output = useRef()
  const container = useRef()

  const deleteIDButton = useRef()

  const [count, setCount] = useState(0)
  const [header, setHeader] = useState(bp.axios.defaults.headers.common)
  //const header = bp.axios.defaults.headers.common

  const getQnaData = async () => {
    let response = await fetch(window.ROOT_PATH + bp.axios.defaults.baseURL + '/qna/questions', {
      method: 'GET',
      headers: header
    })
    // -------------------------------------
    // Fallback for older Botpress Versions
    // -------------------------------------
    if (response.status == '404') {
      const countData = await fetch(window.ROOT_PATH + bp.axios.defaults.baseURL + '/mod/qna/questions?limit=0', {
        method: 'GET',
        headers: header
      })
      if (countData.status == '200') {
        const limit = countData.json().count
        response = await fetch(window.ROOT_PATH + bp.axios.defaults.baseURL + '/mod/qna/questions?limit=' + limit, {
          method: 'GET',
          headers: header
        })
      }
    }
    // -------------------------------------
    // got results?
    // -------------------------------------
    if (response.status == '200') {
      const json = await response.json()

      if (json.count == 0) {
        setLoadingStatus('No questions available')
      } else {
        setQNA(json.items)
      }
    } else {
      setLoadingStatus('Ups, something went wrong...')
    }
  }

  useEffect(() => {
    getQnaData()
  }, [])

  useEffect(() => {
    modal.current.style.display = 'none'
  }, [modal])

  useEffect(() => {
    if (qna && qna.length > 0) {
      pickDoublicates(qna)
    }
  }, [qna])

  useEffect(() => {
    if (modalQuestionList) {
      getQnaData()
    }
  }, [modalQuestionList])

  // ----------------------------------------------------
  // scan for duplicate entries
  // ----------------------------------------------------
  useEffect(() => {
    if (questionsArray.length > 0) {
      let rArray = []
      let oArray = []
      questionsArray.map(item => {
        item.questions.map(question => {
          questionsArray.map(i2 => {
            const found = i2.questions.indexOf(question)

            if (found !== -1) {
              // compare both sides
              if (item.id !== i2.id) {
                // show result only one time
                const index1 = rArray.findIndex(e => e.id === item.id && e.question == question)
                const index2 = rArray.findIndex(e2 => e2.id === i2.id && e2.question == i2.questions[found])

                if (index1 === -1 || index2 === -1) {
                  if (index1 === -1) {
                    rArray.push({ id: item.id, question: question })
                  }

                  if (index2 === -1) {
                    rArray.push({ id: i2.id, question: i2.questions[found] })
                  }

                  let Headline1 = ''
                  let Headline2 = ''

                  // get headlines
                  questionsArray.map(qa => {
                    if (item.id == qa.id) {
                      Headline1 = qa.questions[0]
                    }
                    if (i2.id == qa.id) {
                      Headline2 = qa.questions[0]
                    }
                  })

                  oArray.push({ id: item.id, question: question, headline: Headline1, duplicate: false })
                  oArray.push({ id: i2.id, question: i2.questions[found], headline: Headline2, duplicate: true })
                }
              }
            }
          })
        })
      })
      setResultsArray(rArray)
      setOutputArray(oArray)

      // count duplicate entries
      const duplicates = oArray.filter(d => d.duplicate == false)

      setLoadingStatus('Results (' + duplicates.length + ')')
    }
  }, [questionsArray])

  // ----------------------------------------------------
  // make QnA better readable
  // ----------------------------------------------------
  const pickDoublicates = async json => {
    let tempQuestionsArray = []
    // convert json to a better readable format
    json.forEach(item => {
      let questions = []
      if (item.data.questions[lang]) {
        item.data.questions[lang].forEach(q => {
          questions.push(q.toLowerCase())
        })
        tempQuestionsArray.push({ id: item.id, questions: questions })
      }
    })
    setQuestionsArray(tempQuestionsArray)
  }

  // ----------------------------------------------------
  // Open Modal Method
  // ----------------------------------------------------
  const openModal = el => {
    el.preventDefault()

    const myModal = modal.current
    myModal.style.display = 'block'

    const header = modalTitle.current

    if (el) {
      const offset = el.target.getBoundingClientRect()
      const parentOffset = output.current.getBoundingClientRect()

      myModal.style.left = parseInt(offset.left - parentOffset.left) + 'px'
      myModal.style.top = parseInt(offset.top - parentOffset.top) + output.current.scrollTop + 'px'
      myModal.style.width = offset.width + 'px'

      let id = el.target.dataset.id
      header.innerHTML = el.target.innerHTML

      setCurrentID(id)

      qna.map(qnaItem => {
        if (qnaItem.id == id) {
          setContexts(' ' + qnaItem.data.contexts)
        }
      })
      fillModalContent(id)
    }
  }

  // ----------------------------------------------------
  // close Modal
  // ----------------------------------------------------
  const closeModal = el => {
    el.preventDefault()
    const myModal = modal.current
    myModal.style.display = 'none'
  }
  // ----------------------------------------------------
  // delete whole question
  // ----------------------------------------------------
  const fDeleteID = async () => {
    const id = currentID
    const studioURL = bp.axios.defaults.baseURL.replace('bots', 'studio')
    let response = await fetch(`${window.ROOT_PATH}${studioURL}/qna/questions/${id}/delete`, {
      method: 'POST',
      headers: header
    })
    // -------------------------------------
    // Fallback for older Botpress Versions
    // -------------------------------------
    if (response.status == '404') {
      const countData = await fetch(`${window.ROOT_PATH}${bp.axios.defaults.baseURL}/mod/qna/questions/${id}/delete`, {
        method: 'POST',
        headers: header
      })
    }
    const myModal = modal.current
    myModal.style.display = 'none'
    getQnaData()
  }
  // ----------------------------------------------------
  // delete single question
  // ----------------------------------------------------
  const fDeleteQuestion = async (e, question) => {
    e.preventDefault()
    const id = currentID

    let qnaHeaders = {
      ...header,
      'Content-Type': 'application/json'
    }

    qna.map(async item => {
      if (item.id == currentID) {
        let questions = item.data.questions[lang]

        questions = questions.filter(q => q.toLowerCase() !== question)

        item.data.questions[lang] = questions

        const studioURL = bp.axios.defaults.baseURL.replace('bots', 'studio')
        let response = await fetch(`${window.ROOT_PATH}${studioURL}/qna/questions/${currentID}`, {
          method: 'POST',
          headers: qnaHeaders,
          body: JSON.stringify(item.data)
        })
        // -------------------------------------
        // Fallback for older Botpress Versions
        // -------------------------------------
        if (response.status == '404') {
          response = await fetch(`${window.ROOT_PATH}${bp.axios.defaults.baseURL}/mod/qna/questions/${currentID}`, {
            method: 'POST',
            headers: qnaHeaders,
            body: JSON.stringify(item.data)
          })
        }
        const newModalQuestionList = modalQuestionList.filter(q => q.question.toLowerCase() !== question)

        setModalQuestionList(newModalQuestionList)
      }
    })
  }

  const fillModalContent = id => {
    let questionList = []
    questionsArray.map(item => {
      if (item.id == id) {
        item.questions.map(question => {
          const qIndex = resultsArray.findIndex(e => e.question == question)
          if (qIndex > -1) {
            questionList.push({ question: question, marked: true, id: id })
          } else {
            questionList.push({ question: question, marked: false })
          }
        })
      }
    })
    setModalQuestionList(questionList)
  }

  const changeLang = e => {
    e.preventDefault()
    console.log(e.target.value)
    setLang(e.target.value)
    getQnaData()
  }

  // ----------------------------------------------------
  // JSX output to screen
  // ----------------------------------------------------
  return (
    <div className={style.container} ref={container}>
      <div>
        <div className={style.header}>
          <h3>Q&amp;A Duplicate Finder V1.0.3</h3>
          <h6>&copy; 2022 by Frank Dase for publicplan GmbH</h6>
        </div>
        {languages.length > 1 ? (
          <div className={style.languageSelector}>
            <label>Select Language</label>
            <select onChange={e => changeLang(e)} value={lang}>
              {languages.map((lang, index) => (
                <option value={lang} key={index}>
                  {lang}
                </option>
              ))}
            </select>
          </div>
        ) : null}
        <div className={style.status}>{loadingStatus}</div>
      </div>

      <div id="output" className={style.output} ref={output}>
        <div className={style.parent}>
          {outputArray &&
            outputArray.map(item => {
              return (
                <div>
                  <div
                    className={!item.duplicate ? style.id : style.id + ' ' + style.duplicate}
                    onClick={e => openModal(e)}
                    data-id={item.id}
                  >
                    {item.headline}
                  </div>
                  <div className={!item.duplicate ? style.question : style.question + ' ' + style.duplicate}>
                    {item.question}
                  </div>
                </div>
              )
            })}
        </div>
        <div id="modal" ref={modal} className={style.modal}>
          <div className={style.modalHeader}>
            <span class={style.modalClose} onClick={e => closeModal(e)}>
              X
            </span>
            <Icon
              ref={deleteIDButton}
              icon="trash"
              className={style.deleteID}
              data-id="0"
              onClick={() => fDeleteID()}
            ></Icon>
            <span className={style.modalTitle} id="modalTitle" ref={modalTitle}></span>
          </div>
          <div className={style.context}>
            <b>Contexts:</b> {contexts}
          </div>
          <div className={style.modalContent} id="modalContent" ref={modalContent}>
            {modalQuestionList &&
              modalQuestionList.map(item => {
                return (
                  <div className={item.marked ? style.marked : ''}>
                    {item.marked ? (
                      <Icon
                        icon="trash"
                        className={style.deleteQuestion}
                        onClick={e => fDeleteQuestion(e, item.question)}
                        data-question={item.question}
                      ></Icon>
                    ) : (
                      ''
                    )}
                    {item.question}
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default duplicateFinder
