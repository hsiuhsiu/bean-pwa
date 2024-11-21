import './style.css'

document.addEventListener('DOMContentLoaded', () => {})

import accountMap from './accounts'
import allPayees from './payees'

const allAccountShortNames =
  accountMap instanceof Map
    ? Array.from(accountMap.keys())
    : Object.keys(accountMap)

const commonWallet = new Map([
  ['CFU', 'Liabilities:P-US:CreditCard:CFU'],
  ['Bilt', 'Liabilities:P-US:CreditCard:Bilt'],
  ['Apple', 'Liabilities:P-US:CreditCard:Apple'],
  ['Platinum', 'Liabilities:P-US:CreditCard:AMEX-MSPlatinum'],
  ['Hyatt', 'Liabilities:P-US:CreditCard:Hyatt'],
  ['Freedom', 'Liabilities:P-US:CreditCard:Freedom']
])

const commonExpCat = new Map([
  ['內用', 'Expenses:Food:Meal:DiningIn'],
  ['外帶', 'Expenses:Food:Meal:Takeout'],
  ['咖啡店', 'Expenses:Food:Snack:CoffeeShop'],
  ['飲料', 'Expenses:Food:Snack:Drink'],
  ['甜點', 'Expenses:Food:Snack:Sweet'],
  ['停車', 'Expenses:Trans:Driving:Parking']
])

document.addEventListener('DOMContentLoaded', () => {
  const walletSelect = document.getElementById('walletSelect')
  const searchInput = document.getElementById('searchInput')
  const searchDropdown = document.getElementById('searchDropdown')

  const expCatSelect = document.getElementById('expCatSelect')
  const searchInput2 = document.getElementById('searchInput2')
  const searchDropdown2 = document.getElementById('searchDropdown2')

  const payeeInput = document.getElementById('payeeInput')
  const payeeDropdown = document.getElementById('payeeDropdown')

  const numberInput = document.getElementById('numberInput')
  const currencyRadios = document.getElementsByName('currency')
  const dateInput = document.getElementById('dateInput')
  const noteInput = document.getElementById('noteInput')
  const annotationRadios = document.getElementsByName('annotation')
  const timeCheckbox = document.getElementById('timeCheckbox')

  const sendButton = document.getElementById('sendButton')

  /* set today as default date */
  const today = new Date()
  const yyyy = today.getFullYear()
  let mm = today.getMonth() + 1
  let dd = today.getDate()

  if (mm < 10) {
    mm = '0' + mm
  }
  if (dd < 10) {
    dd = '0' + dd
  }

  const todayStr = `${yyyy}-${mm}-${dd}`
  dateInput.value = todayStr

  function initCommonSelect () {
    walletSelect.innerHTML = ''
    expCatSelect.innerHTML = ''

    // 添加常用選項
    commonWallet.forEach((full, short) => {
      const option = document.createElement('option')
      option.value = full
      option.textContent = short
      walletSelect.appendChild(option)
    })
    commonExpCat.forEach((full, short) => {
      const option = document.createElement('option')
      option.value = full
      option.textContent = short
      expCatSelect.appendChild(option)
    })

    // 添加 "其他" 选项
    const otherWalletOption = document.createElement('option')
    otherWalletOption.value = 'other'
    otherWalletOption.textContent = '其他...'
    walletSelect.appendChild(otherWalletOption)

    const otherExpCatOption = document.createElement('option')
    otherExpCatOption.value = 'other'
    otherExpCatOption.textContent = '其他...'
    expCatSelect.appendChild(otherExpCatOption)
  }

  initCommonSelect()

  // 錢包選擇「其他」時，顯示搜尋框
  walletSelect.addEventListener('change', () => {
    if (walletSelect.value === 'other') {
      searchInput.style.display = 'block'
      searchInput.focus()
    } else {
      searchInput.style.display = 'none'
      searchDropdown.style.display = 'none'
      searchInput.value = ''
    }
  })

  // 支出選擇「其他」時，顯示搜尋框
  expCatSelect.addEventListener('change', () => {
    if (expCatSelect.value === 'other') {
      searchInput2.style.display = 'block'
      searchInput2.focus()
    } else {
      searchInput2.style.display = 'none'
      searchDropdown2.style.display = 'none'
      searchInput2.value = ''
    }
  })

  // fromAccount filter
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase()
    if (query === '') {
      searchDropdown.style.display = 'none'
      return
    }

    // Filter the keys based on the query
    const filteredKeys = allAccountShortNames.filter(key =>
      key.toLowerCase().includes(query)
    )

    // Render the dropdown with the filtered keys
    renderSearchDropdown(searchInput, searchDropdown, filteredKeys)
  })

  // toAccount filter
  searchInput2.addEventListener('input', () => {
    const query = searchInput2.value.trim().toLowerCase()
    if (query === '') {
      searchDropdown2.style.display = 'none'
      return
    }

    // Filter the keys based on the query
    const filteredKeys = allAccountShortNames.filter(key =>
      key.toLowerCase().includes(query)
    )

    // Render the dropdown with the filtered keys
    renderSearchDropdown(searchInput2, searchDropdown2, filteredKeys)
  })

  function renderSearchDropdown (input, dropdown, keys) {
    dropdown.innerHTML = ''
    if (keys.length === 0) {
      dropdown.style.display = 'none'
      return
    }
    keys.forEach(key => {
      const div = document.createElement('div')
      div.className = 'dropdown-item'
      div.textContent = key // Display the key in the dropdown
      dropdown.appendChild(div)

      div.addEventListener('click', () => {
        // const value =
        //   accountMap instanceof Map ? accountMap.get(key) : accountMap[key]
        input.value = key
        console.log(key)
        dropdown.style.display = 'none'
      })
    })
    dropdown.style.display = 'block'
  }

  // listen payee input
  payeeInput.addEventListener('input', () => {
    const query = payeeInput.value.trim().toLowerCase()
    if (query === '') {
      payeeDropdown.style.display = 'none'
      return
    }
    const filteredPayees = allPayees.filter(payee =>
      payee.toLowerCase().includes(query)
    )
    renderPayeeDropdown(filteredPayees)
  })

  // render payee dropdown
  function renderPayeeDropdown (items) {
    payeeDropdown.innerHTML = ''
    if (items.length === 0) {
      payeeDropdown.style.display = 'none'
      return
    }
    items.forEach(item => {
      const div = document.createElement('div')
      div.className = 'dropdown-item'
      div.textContent = item
      payeeDropdown.appendChild(div)

      div.addEventListener('click', () => {
        payeeInput.value = item
        payeeDropdown.style.display = 'none'
      })
    })
    payeeDropdown.style.display = 'block'
  }

  // hide dropdown when clicked outside
  document.addEventListener('click', event => {
    if (
      event.target !== searchInput &&
      !searchDropdown.contains(event.target)
    ) {
      searchDropdown.style.display = 'none'
    }

    if (
      event.target !== searchInput2 &&
      !searchDropdown2.contains(event.target)
    ) {
      searchDropdown2.style.display = 'none'
    }

    if (event.target !== payeeInput && !payeeDropdown.contains(event.target)) {
      payeeDropdown.style.display = 'none'
    }
  })

  sendButton.addEventListener('click', () => {
    console.log('新增', sendButton)

    // date
    const dateValue = dateInput.value
    if (dateValue === '') {
      alert('請選擇日期')
      return
    }

    // wallet value
    let walletValue
    if (walletSelect.value === 'other') {
      walletValue =
        accountMap instanceof Map
          ? accountMap.get(searchInput.value)
          : accountMap[searchInput.value]
      if (walletValue === '') {
        alert('請選擇「錢包」')
        return
      }
    } else {
      walletValue = walletSelect.value
    }

    // expense category value
    let expCatValue
    if (expCatSelect.value === 'other') {
      expCatValue =
        accountMap instanceof Map
          ? accountMap.get(searchInput2.value)
          : accountMap[searchInput2.value]
      if (expCatValue === '') {
        alert('請選擇「消費類別」')
        return
      }
    } else {
      expCatValue = expCatSelect.value
    }

    const payeeValue = payeeInput.value
    const numberValue = numberInput.value.trim()

    if (numberValue === '') {
      alert('請輸入金額')
      return
    }

    // time
    let timeValue = ''
    if (timeCheckbox.checked) {
      const now = new Date()
      let hours = now.getHours()
      let minutes = now.getMinutes()
      let seconds = now.getSeconds()

      if (hours < 10) {
        hours = '0' + hours
      }
      if (minutes < 10) {
        minutes = '0' + minutes
      }
      if (seconds < 10) {
        seconds = '0' + seconds
      }

      timeValue = `${hours}:${minutes}:${seconds}`
    }

    let currencyValue = ''
    for (const radio of currencyRadios) {
      if (radio.checked) {
        currencyValue = radio.value
        break
      }
    }

    const noteValue = noteInput.value.trim()

    let annotationValue = ''
    for (const radio of annotationRadios) {
      if (radio.checked) {
        annotationValue = radio.value
        break
      }
    }

    // construct beancount string
    const data = {
      fromAccount: walletValue,
      toAccount: expCatValue,
      amount: numberValue,
      currency: currencyValue,
      date: dateValue,
      time: timeValue,
      payee: payeeValue,
      note: noteValue,
      flag: annotationValue
    }
    let beancountString = formatData(data)
    console.log(beancountString, sendButton)

    fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain'
      },
      body: beancountString
    })
      .then(response => response.json())
      .then(result => {
        console.log('submitted:', result)
        alert('Success! Beancount string:\n' + beancountString)
        clearInputFields()
      })
      .catch(error => {
        console.error('error:', error)
        alert('Failed! Beancount string:\n' + beancountString)
      })
  })
})

function formatData (data) {
  return `\n${data.date} ${data.flag} \"${data.payee}\" \"${data.note}\"${
    data.time ? `\n  time: "${data.time}"` : ''
  }
  ${data.fromAccount} -${data.amount} ${data.currency}
  ${data.toAccount}`
}

function clearInputFields () {
  // Assuming you have input fields with these IDs
  document.getElementById('numberInput').value = ''
  document.getElementById('noteInput').value = ''
  document.getElementById('payeeInput').value = ''

  document.getElementById('timeCheckbox').checked = false
}
