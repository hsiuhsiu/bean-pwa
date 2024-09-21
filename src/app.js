// import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  // 初始化
})

const dropdown = document.getElementById('dropdown')
const options = ['Liabilities:card1', 'Liabilities:card2', 'Liabilities:card3']

options.forEach(option => {
  const opt = document.createElement('option')
  opt.value = option
  opt.innerHTML = option
  dropdown.appendChild(opt)
})

const searchInput = document.getElementById('search')
const suggestions = document.getElementById('suggestions')
const items = ['Expenses:Food:Grocery', 'Expenses:Health']

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase()
  suggestions.innerHTML = ''

  if (query) {
    const filteredItems = items.filter(item =>
      item.toLowerCase().includes(query)
    )
    filteredItems.forEach(item => {
      const li = document.createElement('li')
      li.textContent = item
      suggestions.appendChild(li)

      li.addEventListener('click', () => {
        searchInput.value = item
        suggestions.innerHTML = ''
      })
    })
  }
})

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('sw.js')
      .then(registration => {
        console.log('ServiceWorker 注册成功: ', registration)
      })
      .catch(error => {
        console.log('ServiceWorker 注册失败: ', error)
      })
  })
}

const sendButton = document.getElementById('send')

sendButton.addEventListener('click', () => {
  console.log('按按鈕：', sendButton)
  const data = {
    selectedOption: dropdown.value,
    searchInput: searchInput.value
  }

  fetch('http://your-home-server-address/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(result => {
      console.log('成功:', result)
    })
    .catch(error => {
      console.error('錯誤:', error)
    })
})
