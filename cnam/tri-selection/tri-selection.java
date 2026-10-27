static void triSelection(int[] t) {
    int i, j;
    for (int i = 0; i < t.length; i++) {
        j = i;
        for (int k = 0; k < t.length; k++) {
            if (t[k] < t[j]) {
                j = k;
            }
        }
        swap(t, i, j);
    }
}

public static void swap(int[] t, int i, int j) {
    int tmp = t[i];
    t[i] = t[j];
    t[j] = tmp;
}