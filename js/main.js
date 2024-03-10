function handleFormSubmit(event) {
  event.preventDefault();
  console.log(applicantForm.name.value);
  let message = `<b>Сообщение с сайта!</b>\n`;
  message += `<b>Имя : ${applicantForm.name.value}</b>\n`;
  message += `<b>Название компании: ${applicantForm.company.value}</b>\n`;
  message += `<b>Email : ${applicantForm.email.value}</b>\n`;
  axios.post(URI_API, {
    chat_id: chat_id,
    parse_mode: "html",
    text: message,
  });
}

const token = "7168085700:AAGoLTD-Nk6Catt9A316lNKQQjPEHBx6uV8";
const chat_id = "-1002027733868";
const URI_API = `https://api.telegram.org/bot${token}/sendMessage`;
const applicantForm = document.getElementById("formTelegramActionSubmit");

applicantForm.addEventListener("submit", handleFormSubmit);
