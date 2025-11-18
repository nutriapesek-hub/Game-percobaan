// 1. Ambil elemen-elemen dari HTML menggunakan ID
const countDisplay = document.getElementById('count-display');
const decrementBtn = document.getElementById('decrement-btn');
const incrementBtn = document.getElementById('increment-btn');

// 2. Inisialisasi variabel hitungan
let count = 0;

// 3. Fungsi untuk memperbarui tampilan hitungan
function updateDisplay() {
    countDisplay.textContent = count;
}

// 4. Tambahkan Event Listener untuk tombol Tambah
incrementBtn.addEventListener('click', () => {
    count++;
    updateDisplay();
});

// 5. Tambahkan Event Listener untuk tombol Kurang
decrementBtn.addEventListener('click', () => {
    // Pastikan hitungan tidak turun di bawah nol (opsional)
    if (count > 0) {
        count--;
        updateDisplay();
    }
    // Jika Anda ingin mengizinkan angka negatif, cukup gunakan: count--; updateDisplay();
});

// Panggil sekali saat dimuat untuk memastikan tampilan awal benar
updateDisplay();
