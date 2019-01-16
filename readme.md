# GRAPH

### G = (V, E, i)

### Граф это совокупность множества вершин V, множества ребер E, отношения инцедентности i.

V = { 1, 2, 3 4}

E = { a, b, c, d, e, f, g}

I; e -> { x, y}

a { 1, 3}

b { 2, 4 }

c { 1, 3 }

d { 3, 4 }

e { 3, 4 }

f { 1, 2 }

g { 3, 4}

h { 2, 2 }


![graph](../assets/graph.png?raw=true)


Вершины {1 и 2} называются концевыми вершинами (или просто концами) ребра f= { 1, 2 }. Ребро, в свою очередь, соединяет эти вершины (f инцидентно этим вершинам). 
Две концевые вершины одного и того же ребра называются соседними.
так же для ориентированного графа, направленные рёбра именуются также дугами.

![simple_graph](../assets/simple_graph.png?raw=true)

### **_Матрица смежности_**

 Это двумерный массив (Вершин X Вершин). Если в клетке i,j установлено значение 0, то дуги, начинающейся в вершине i и кончающейся в вершине j, нет. Иначе дуга есть. Чаще всего за значение ПУСТО берут 0, а в клетки, которые обозначают наличие дуги, вписывают вес этой дуги. Если граф не взвешенный, то вес дуги считается равным единице.

| _ | 1 | 2 | 3 | 4 |
| ------------- | ------------- | ------------- | ------------- | :-------------: |
| 1 | 0 | 1 | 1 | 0 |
| 2 | 1 | 1 | 0 | 1 |
| 3 | 1 | 0 | 0 | 1 |
| 4 | 0 | 1 | 1 | 0 |

| Операция | Временная сложность |
| ------------- |:-------------:|
| Проверка смежности вершин x и y | О(1) |
| Перечисление всех вершин смежных с x	| О(V)      |
| Определение веса ребра (x, y) | О(1) |
| Перечисление всех ребер (x, y) | О(V2) |


### **_Описание Бержа_**

Для каждой вершины хранится список смежных вершин. Чаще всего для этого используется двумерный массив размером V в квадрате, в строке u которого хранятся номера вершин, смежных с u. В нулевой элемент строки u вписывается количество вершин, хранящихся в данной строке.

В нулевом столбце хранятся “длины” строк. Однако, вес дуг никак не хранится, а если его хранить отдельно, то нужно заводить ещё один массив размером V в квадрате…

| _ | 0 | 1 | 2 | 3 | 4 |
| ------------- | ------------- | ------------- | ------------- | ------------- | :-------------: |
| 1 | 2 | 2 | 3 | 0 | 0 |
| 2 | 3 | 1 | 2 | 4 | 0 |
| 3 | 2 | 1 | 4 | 0 | 0 |
| 4 | 2 | 2 | 3 | 0 | 0 |

| Операция | Временная сложность |
| ------------- |:-------------:|
| Проверка смежности вершин x и y | О(V) |
| Перечисление всех вершин смежных с x	| О(V)      |
| Определение веса ребра (x, y) | Вес не хранится |
| Перечисление всех ребер (x, y) | О(Е) |


### **_Список дуг_**

Следующий тип хранения графа в памяти компьютера - список дуг. Чаще всего это двумерный массив размером 3*E, в первой строке которого хранится информация, из какой вершины начинается дуга, во второй - в какой кончается, а в третьей строке - вес дуги.

| _ | 1 | 2 | 3 | 4 | 5 |
| ------------- | ------------- | ------------- | ------------- | ------------- | :-------------: |
| 1 | 1 | 2 | 2 | 4 | 3 |
| 2 | 2 | 2 | 4 | 3 | 1 |
| 3 | 1 | 1 | 1 | 1 | 1 |

| Операция | Временная сложность |
| ------------- |:-------------:|
| Проверка смежности вершин x и y | О(E) |
| Перечисление всех вершин смежных с x	| О(E)      |
| Определение веса ребра (x, y) | O(E) |
| Перечисление всех ребер (x, y) | O(E) |
| Поиск i-ой дуги (x, y) | O(E) |


### **_Список смежности_**

Он представляет из себя два массива: vert и adj.

Из каждой вершины может выходить 0, 1 и более дуг, причём вершин будет V или менее. Если из вершины i не выходит дуг (т.е. количество дуг равно нулю), то в массиве vert в i-ой клетке будет храниться значение ПУСТО. Если из вершины i выходит хотя бы одна дуга, то в массиве vert в i-ой клетке будет храниться номер элемента массива adj, в котором хранится конечная вершина дуги. Также в массиве adj хранится вес дуги, и указатель на следующую “конечную” вершину дуги, которая начинается в вершине i. Поначалу может показаться, что этот способ очень запутан, т.к. один массив указывает на другой, другой сам на себя, при чём много раз. Однако это не совсем так, т.к. следует лишь несколько раз самому попробовать реализовать хранение графа таким способом, и он кажется очень мощным, полезным и несложным. Давайте сами попробуем разобраться на примере.

| Операция | Временная сложность |
| ------------- |:-------------:|
| Проверка смежности вершин x и y | О(E) |
| Перечисление всех вершин смежных с x	| О(E)      |
| Определение веса ребра (x, y) | O(E) |
| Перечисление всех ребер (x, y) | O(E) |
| Поиск i-ой дуги (x, y) | O(E) |