let today = new Date().toISOString().split("T")[0];
start_date.value = today;
start_date.min = today;

// Trouver la date du jour suivant
let tomorow = new Date();
tomorow.setDate(tomorow.getDate() + 1);

let tomorowFormat = tomorow.toISOString().split("T")[0];
end_date.value = tomorowFormat;
end_date.min = tomorowFormat;

// parmarétrer de sorte que la date de debut soit toujours inferieure à la date de fin
start_date.addEventListener("change", (e) => {
  let day = new Date(e.target.value);

  if (end_date.value < start_date.value) {
    day.setDate(day.getDate() + 1);
    end_date.value = day.toISOString().split("T")[0];
  }
});

// parametre pour eviter qu'on puisse modifier la date de fin et qu'elle soit inferieur à la date de debut deja choisit

end_date.addEventListener("change", (e) => {
  let day = new Date(e.target.value);

  if (start_date.value > end_date.value) {
    day.setDate(day.getDate() - 1);
    start_date.value = day.toISOString().split("T")[0];
  }
});

// calculer le nombre de jour et determiner le prix total
const bookingCalc = () => {
  let diffTime = Math.abs(
    new Date(end_date.value) - new Date(start_date.value)
  );
  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  total.textContent = diffDays * nightPrice.textContent;
};

bookingCalc();
start_date.addEventListener("change", bookingCalc);
end_date.addEventListener("change", bookingCalc);
