

let content = `
  <div id="newImage1">
    <p style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);">
      記得修改 
      <code style="color:red;border-bottom:1px solid red;font-weight:900;">
        deploy.sh
      </code> 
      、
      <code style="color:red;border-bottom:1px solid red;font-weight:900;">
        vite.config.js
      </code> 
      的 
      <code style="color:red;border-bottom:1px solid red;font-weight:900;">
        <儲存庫名稱>
      </code>
    </p>
  </div>
`

render()

function render () {
  const app = document.querySelector('#app')
  const div = document.createElement('div')

  div.setAttribute('id', 'newImage')
  app.appendChild(div)
  div.innerHTML = content
}