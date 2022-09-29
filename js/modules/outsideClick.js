export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      setTimeout(() => {
        html.addEventListener(userEvent, handleOutsideClick);
      });
    });
    element.setAttribute(outside, "");
  }

  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      //verifica se o element contain o event.target, caso nao contenha, ele fecha o menu
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutsideClick);
      });
      //usamos para não ficar adicionando evento toda hora ao html
      callback();
    }
  }
}
