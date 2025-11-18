// 1. Ambil elemen-elemen DOM
const castButton = document.getElementById('cast-button');
const statusDisplay = document.getElementById('status');
const catchList = document.getElementById('catch-list');

// 2. Daftar Ikan dan Peluang (Probabilitas)
const fishData = [
    { nama: "🐟 Ikan Teri", peluang: 0.40 }, 
    { nama: "🐠 Ikan Mas", peluang: 0.30 },
    { nama: "🐡 Ikan Buntal", peluang: 0.15 },
    { nama: "🦈 Hiu Kecil", peluang: 0.05 },
    { nama: "👞 Sepatu Bot Tua", peluang: 0.10 } // Zonk
];

// 3. Fungsi untuk menentukan hasil berdasarkan peluang
function determineCatch() {
    const randomValue = Math.random();
    let cumulativeProbability = 0;

    for (const fish of fishData) {
        cumulativeProbability += fish.peluang;
        if (randomValue <= cumulativeProbability) {
            return fish;
        }
    }
    return { nama: "❌ Tidak Ada Apa-apa", peluang: 0 };
}

// 4. Fungsi untuk menampilkan hasil tangkapan
function addCatchToHistory(catchName) {
    const listItem = document.createElement('li');
    const time = new Date().toLocaleTimeString(); 
    listItem.textContent = `[${time}] ${catchName}`; 
    
    catchList.prepend(listItem); 
}

// 5. Fungsi utama untuk memancing
function startFishing() {
    castButton.disabled = true;
    statusDisplay.textContent = "⏳ Pancing dilempar... menunggu gigitan!";

    const fishingTime = 3000; // Waktu tunggu 3 detik

    setTimeout(() => {
        const hasil = determineCatch();
        
        statusDisplay.textContent = `🎉 Anda menangkap: ${hasil.nama}!`;
        addCatchToHistory(hasil.nama); 

        castButton.disabled = false;
        
    }, fishingTime);
}

// 6. Event Listener untuk tombol
castButton.addEventListener('click', startFishing);}

// 5. Fungsi utama untuk memancing
function startFishing() {
    castButton.disabled = true;
    statusDisplay.textContent = "⏳ Pancing dilempar... menunggu gigitan!";

    const fishingTime = 3000; // Waktu tunggu 3 detik

    setTimeout(() => {
        const hasil = determineCatch();
        
        statusDisplay.textContent = `🎉 Anda menangkap: ${hasil.nama}!`;
        addCatchToHistory(hasil.nama); 

        castButton.disabled = false;
        
    }, fishingTime);
}

// 6. Event Listener untuk tombol
castButton.addEventListener('click', startFishing); castButton = document.getElementById('cast-button');
const statusDisplay = document.getElementById('status');
const catchList = document.getElementById('catch-list'); // PASTIKAN ID INI BENAR

// 2. Daftar Ikan dan Peluang (Probabilitas)
const fishData = [
    { nama: "🐟 Ikan Teri", peluang: 0.40 }, 
    { nama: "🐠 Ikan Mas", peluang: 0.30 },
    { nama: "🐡 Ikan Buntal", peluang: 0.15 },
    { nama: "🦈 Hiu Kecil", peluang: 0.05 },
    { nama: "👞 Sepatu Bot Tua", peluang: 0.10 }
];

// ... (Fungsi determineCatch dan variabel lainnya sama seperti sebelumnya) ...

// Fungsi untuk menentukan hasil berdasarkan peluang
function determineCatch() {
    const randomValue = Math.random();
    let cumulativeProbability = 0;

    for (const fish of fishData) {
        cumulativeProbability += fish.peluang;
        if (randomValue <= cumulativeProbability) {
            return fish;
        }
    }
    return { nama: "❌ Tidak Ada Apa-apa", peluang: 0 };
}

// 4. Fungsi untuk menampilkan hasil tangkapan
function addCatchToHistory(catchName) {
    // 🐟 LOGIKA INI PENTING 🐟
    const listItem = document.createElement('li');
    const time = new Date().toLocaleTimeString(); 
    listItem.textContent = `[${time}] ${catchName}`; 
    
    // Memasukkan item baru ke daftar tangkapan
    catchList.prepend(listItem); 
}

// 5. Fungsi utama untuk memancing
function startFishing() {
    castButton.disabled = true;
    statusDisplay.textContent = "⏳ Pancing dilempar... menunggu gigitan!";

    const fishingTime = 3000; 

    setTimeout(() => {
        const hasil = determineCatch();
        
        statusDisplay.textContent = `🎉 Anda menangkap: ${hasil.nama}!`;

        // PANGGILAN FUNGSI: Pastikan Anda memanggil fungsi ini
        addCatchToHistory(hasil.nama); 

        castButton.disabled = false;
        
    }, fishingTime);
}

// 6. Event Listener untuk tombol
castButton.addEventListener('click', startFishing);    }, fishingTime);
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
