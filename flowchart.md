```    mermaid
flowchart TD

START@{shape: circ, label: "Start"}
STOP@{shape: dbl-circ, label: "Stop"}

INPUT@{shape: diam, label: "input"}

1@{shape: lean-r, label: "addTask"}
2@{shape: lean-r, label: "showTask"}
3@{shape: lean-r, label: "deleteTask"}
4@{shape: lean-r, label: "exit"}

TITLE@{shape: rect, label: "Masukan Title"}
DESC@{shape: rect, label: "Masukan Description"}

DESCY/N@{shape: diam, label: "Y / N"}

TASK@{shape: diam, label: "Apakah Task Kosong?"}
OUTPUTTASK@{shape: lean-r, label: "Tampilkan Task"}

DELETE@{shape: diam, label: "Apakah Task Kosong?"}
NO@{shape: lean-r, label: "Masukan No Yang Ingin dihapus"}


START-->INPUT

INPUT--1-->1
INPUT--2-->2
INPUT--3-->3
INPUT--4-->4


1-->TITLE
TITLE-->DESC
DESC-->DESCY/N
DESCY/N--Y-->1
DESCY/N--N-->INPUT


2-->TASK
TASK--TRUE-->INPUT
TASK--FALSE-->OUTPUTTASK
OUTPUTTASK-->INPUT


3-->DELETE
DELETE--TRUE-->INPUT
DELETE--FALSE-->NO
NO-->INPUT

4-->STOP




```