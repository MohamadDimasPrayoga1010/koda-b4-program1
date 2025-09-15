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
kosong2@{shape: rect, label: "Task Masih Kosong"}
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