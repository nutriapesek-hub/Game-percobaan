// 1. Ambil elemen-elemen DOM
const castButton = document.getElementById('cast-button');
const statusDisplay = document.getElementById('status');
const catchList = document.getElementById('catch-list');

// 2. Daftar Ikan dan Peluang (Probabilitas)
const fishData = [
    { nama: "🐟 Ikan Teri", peluang: 0.40 }, // 40%
    { nama: "🐠 Ikan Mas", peluang: 0.30 }, // 30%
    { nama: "🐡 Ikan Buntal", peluang: 0.15 }, // 15%
    { nama: "🦈 Hiu Kecil", peluang: 0.05 },  // 5%
    { nama: "👞 Sepatu Bot Tua", peluang: 0.10 } // 10% - Zonk
];

// 3. Fungsi utama untuk memancing
function startFishing() {
    // Nonaktifkan tombol selama proses memancing
    castButton.disabled = true;
    statusDisplay.textContent = "⏳ Pancing dilempar... menunggu gigitan!";

    // Simulasi waktu tunggu (misalnya, 3 detik)
    const fishingTime = 3000; 

    setTimeout(() => {
        // Tentukan hasil tangkapan
        const hasil = determineCatch();
        
        // Perbarui status
        statusDisplay.textContent = `🎉 Anda menangkap: ${hasil.nama}!`;

        // Tambahkan hasil ke daftar tangkapan
        addCatchToHistory(hasil.nama);

        // Aktifkan kembali tombol
        castButton.disabled = false;
        
    }, fishingTime);
}

// 4. Fungsi untuk menentukan hasil berdasarkan peluang
function determineCatch() {
    const randomValue = Math.random(); // Menghasilkan angka antara 0.0 hingga 1.0
    let cumulativeProbability = 0;

    for (const fish of fishData) {
        cumulativeProbability += fish.peluang;
        if (randomValue <= cumulativeProbability) {
            return fish;
        }
    }
    // Fallback (seharusnya tidak terjadi jika total peluang = 1.0)
    return { nama: "❌ Tidak Ada Apa-apa", peluang: 0 };
}

// 5. Fungsi untuk menampilkan hasil tangkapan
function addCatchToHistory(catchName) {
    const listItem = document.createElement('li');
    // Tambahkan timestamp (opsional)
    const time = new Date().toLocaleTimeString(); 
    listItem.textContent = `[${time}] ${catchName}`; 
    
    // Tambahkan ke bagian atas daftar
    catchList.prepend(listItem); 
}

// 6. Event Listener untuk tombol
castButton.addEventListener('click', startFishing);
    // Gabungkan tombol hapus ke dalam item daftar
    listItem.appendChild(deleteBtn);

    // Tambahkan item daftar ke dalam <ul>
    taskList.appendChild(listItem);

    // Kosongkan input setelah tugas ditambahkan
    taskInput.value = "";
    taskInput.focus();
}

// 3. Event Listener untuk tombol Tambah
addTaskBtn.addEventListener('click', addTask);

// 4. Event Listener untuk tombol Enter di input
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
