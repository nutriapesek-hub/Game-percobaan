// 1. Ambil elemen-elemen dari HTML
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// 2. Fungsi untuk menambah tugas baru
function addTask() {
    const taskText = taskInput.value.trim();

    // Pastikan input tidak kosong
    if (taskText === "") {
        alert("Mohon masukkan tugas terlebih dahulu.");
        return;
    }

    // Buat elemen <li> baru
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Buat tombol hapus
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Hapus';
    deleteBtn.className = 'delete-btn';
    
    // Tambahkan event listener untuk tombol hapus
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(listItem);
    });

    // Tambahkan event listener untuk menandai tugas selesai (klik pada <li>)
    listItem.addEventListener('click', function(e) {
        // Hanya toggle jika yang diklik bukan tombol hapus
        if (e.target !== deleteBtn) {
            listItem.classList.toggle('completed');
        }
    });

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
