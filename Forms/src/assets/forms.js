export function getDataFromLS() {
  var ArrayForms = localStorage.getItem("Forms");
  if (ArrayForms) {
    return (ArrayForms = JSON.parse(ArrayForms));
  } else {
    return [];
  }
}