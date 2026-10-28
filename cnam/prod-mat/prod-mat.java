static int[][] prod_mat(int[][] A, int[][] B) {

    int m = A.length, n = A[0].length, p = B[0].length, s;
    int[][] C = new int[m][p];
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < p; j++) {
            s = 0;
            for(int k = 0; k < n; k++) {
                s += A[i][k] * B[k][j];
            }
            C[i][j] = s;
        }
    }
    return C;
}