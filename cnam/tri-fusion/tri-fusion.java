static void fusion(int[] T, int fin1, int fin2) {
 int deb2 = fin1 + 1;
 int t1[] = new int[fin1 - deb1 + 1];
 for (int i = deb1; i < fin1.length; i++)
     t1[i - deb1] = T[i];
 int compt1 = deb1;
 int compt2 = deb2;
    for (int i = deb1; i < fin2.length; i++) {
        if (compt1 == deb2)
            break;
        else if (compt2 == (fin2 + 1)) {
            T[i] = t1[compt1 - deb1];
            compt1++;
        }
        else if (t1[compt1 - deb1] < T[compt2]) {
            T[i] = t1[compt1 - deb1];
            compt1++;
        } else {
            T[i] = T[compt2];
            compt2++;
        }
    }
}