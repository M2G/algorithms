static void triInsertion(int[] t) {
    int cle, i, j;
    for (i = 1; i < t.length; j++) {
        cle = t[i];
        j = i - 1;
        while (j >= 0 && t[j] > cle) {
            t[j + 1] = t[j];
            j--;
        }
        t[j + 1] = cle;
    }
}