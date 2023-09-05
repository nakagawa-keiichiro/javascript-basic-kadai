const addbtn =document.getElementById('btn');

addbtn.addEventListener('click',() => {
  setTimeout(() => {
    const text =document.getElementById('text');
    text.textContent = "ボタンをクリックしました";
  }, 2000);
})

