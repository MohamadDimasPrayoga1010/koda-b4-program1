# Aplikasi ToDoList
Pengguna bisa menambahkan, melihat, mengedit, menghapus, dan menandai task sebagai selesai.

## Fitur Utama
- **Add Task** → Menambahkan task baru (title & description).
- **Show Task** → Melihat semua task, dikelompokkan berdasarkan tanggal & waktu.
- **Edit Task** → Mengubah title, description, atau menandai task selesai.
- **Delete Task** → Menghapus task berdasarkan nomor.
- **Mark as Done** → Task bisa diberi status `Done` atau `Pending`.
- **Exit** → Keluar dari aplikasi.

## Contoh Penggunaan

### 1. Menambahkan Task
======== Add Task =========

Masukkan Title: Contoh 1
Masukkan Description: Membuat aplikasi To-Do List

Task "Contoh 1" berhasil ditambahkan
Tekan enter untuk kembali

### 2. Menampilkan Task
======== Show Task =========

Tanggal: 15/09/2025

Title: Contoh 1
Description: Membuat aplikasi To-Do List\
Waktu: 10.30.25\
Status: Pending

### 3. Mengedit Task
======= Edit Task ========

Title: Contoh 1
Description: Membuat aplikasi To-Do List
Date: 15/09/2025
Time: 10.30.25
Status: Pending

Masukkan nomor task yang ingin diedit: 1
Masukkan Title baru : Contoh 2
Masukkan Description baru : Test 123
Apakah task selesai? (y/n): y

Task "Belajar Express.js" berhasil diupdate!


### 4. Menghapus Task
======== Delete Task =========

Title: Contoh 2
Description: Test 123
Date: 15/09/2025
Time: 10.30.25
Status: Done

Masukkan nomor task yang ingin dihapus: 1
Task "Contoh 2" berhasil dihapus!


### 5. Keluar
======= TERIMA KASIH ======

## Flowchart
```    mermaid
flowchart TD

START@{shape: circ, label: "Start"}
STOP@{shape: dbl-circ, label: "Stop"}

INPUT@{shape: diam, label: "input"}

1@{shape: lean-r, label: "Buat Task"}
2@{shape: lean-r, label: "Lihat Task"}
3@{shape: lean-r, label: "Edit Task"}
4@{shape: lean-r, label: "Hapus Task"}
5@{shape: lean-r, label: "Keluar"}

TITLE@{shape: lean-r, label: "Masukan Title"}
DESC@{shape: lean-r, label: "Masukan Description"}
DESCISION1@{shape: diam, label: "Tambah Lagi?"}


DECISION2@{shape: diam, label: "Apakah ada task?"}
DAFTARTASK2@{shape: lean-r, label: "Daftar Task"}
KEMBALI2@{shape: lean-r, label: "klik 0 untuk kembali"}

DECISION3@{shape: diam, label: "Apakah ada task?"}
DAFTARTASK3@{shape: lean-r, label: "Daftar Task"}
DECISIONLANJUT@{shape: diam, label: "Lanjut Mengedit?"}
PILIHTASK3@{shape: lean-r, label: "Input Task"}
EDITTASK@{shape: lean-r, label: "Ubah Title"}
EDITTASKDESC@{shape: lean-r, label: "Ubah Deskription"}
EDITTASKSTAT@{shape: lean-r, label: "Ubah Status"}

DECISION4@{shape: diam, label: "Apakah ada task?"}
PILIHTASK4@{shape: lean-r, label: "Input Task"}

START-->INPUT

INPUT--1-->1
INPUT--2-->2
INPUT--3-->3
INPUT--4-->4
INPUT--5-->5

5-->STOP

1-->TITLE
TITLE-->DESC
DESC-->DESCISION1
DESCISION1--Y-->TITLE
DESCISION1--N-->INPUT

2-->DECISION2
DECISION2--True-->DAFTARTASK2
DECISION2--False-->INPUT
DAFTARTASK2-->KEMBALI2
KEMBALI2-->INPUT

3-->DECISION3
DECISION3--True-->DAFTARTASK3
DECISION3--False-->INPUT
DAFTARTASK3-->DECISIONLANJUT
DECISIONLANJUT--False-->INPUT
DECISIONLANJUT--True-->PILIHTASK3
PILIHTASK3-->EDITTASK
EDITTASK-->EDITTASKDESC
EDITTASKDESC-->EDITTASKSTAT
EDITTASKSTAT-->INPUT


4-->DECISION4
DECISION4--False-->INPUT
DECISION4--True-->PILIHTASK4
PILIHTASK4-->INPUT




```