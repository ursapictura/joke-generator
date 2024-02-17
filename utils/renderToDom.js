const renderToDom = (divId, htmlContent) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlContent;
};

export default renderToDom;
