// The latest release, for the update page (/update/). Edit on every release: version + what's new.
// Notes: Ukrainian and English; other languages show the English notes.
const LATEST = {
  version: "0.10.1",
  notes: {
    uk: ["Windows: після першого запуску з'являється підказка, де значок програми (він ховається за стрілкою ^ біля годинника).",
         "Виправлено: перше слово не виправлялось після очищення поля (Ctrl/Cmd+A і Delete або Backspace до порожнього поля) — у програмах, які віддають системі текст поля.",
         "Поправки в перекладах меню (ірландська, данська, таджицька, словенська, вірменська).",
         "Якщо у вас 0.9 або новіша — «Перевірити оновлення» → «Оновити»."],
    en: ["Windows: a hint appears after the first launch showing where the app's icon is (it hides behind the ^ arrow next to the clock).",
         "Fixed: the first word was not corrected after clearing a field (Ctrl/Cmd+A then Delete, or Backspace to an empty field) in apps that expose the field text to the system.",
         "Menu translation fixes (Irish, Danish, Tajik, Slovenian, Armenian).",
         "On 0.9 or newer: «Check for updates» → «Update»."],
  },
};
