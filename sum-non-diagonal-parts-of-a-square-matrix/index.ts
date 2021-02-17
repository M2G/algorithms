

// Input: arr[][] = {{1, 2, 3, 4}, {5, 6, 7, 8}, {9, 10, 11, 12}, {13, 14, 15, 16}}

/*
 _ _ _ _ _ _ _ _
|                |
|  1  2   3   4  |
|  5  6   7   8  |
|  9  10  11  12 |
| 13  14  15  16 |
|_ _ _ _ _ _ _ _ |


2, 3   : Top portion of the matrix 
5, 9   : Left portion of the matrix 
14, 15 : Bottom portion of the matrix 
8, 12  : Right portion of the matrix 

without diagonal : 

1, 6, 11, 16
4, 7, 10, 13


First diag : index row = index column
	row = column
Second diag : sum index row and sum index colmun = N( matrix size )
	numberOfRows - column -1

*/

function sumNonDiagonalPartsOfASquareMatrix(array = [], n: number): number {
	let sumPartTop: number = 0;
	let sumPartLeft: number = 0;
	let sumPartBottom: number = 0;
	let sumPartRight: number = 0;
	let total: number = 0;

	if (!array?.length && !n) {
		return [];	
	}


	console.log('array', array)


	for (let i = 0; i < array.length; i += 1) {
		for (let j = 0; j < array.length; j += 1) {
			// console.log('array', array[i][j])


			// TOP + LEFT
			if (i + j < n - 1) {

					console.log('::::::', {i, j})


				if (i < j && i !== j && i + j > 0) {

					sumPartTop += array[i][j];

						console.log('sumPartTop', { i, j, sumPartTop })

				} else if (i !== j)  {

					sumPartLeft += array[i][j];

								console.log('sumPartLeft', { i, j, sumPartLeft })
				}

			// BOTTOM + RIGHT
			} else {

		console.log('else', { i, j })

				if (i > j && i + j !== n - 1) {

					sumPartBottom += array[i][j];

					console.log('sumPartBottom', { i, j, sumPartBottom })

				} else if (i + j !== n - 1 && i !== j)  {


					sumPartRight += array[i][j];

					console.log('sumPartRight', { i, j, sumPartRight })


				}
				
			}
		}
	}

	total = 
	+ sumPartTop
+ sumPartLeft
+ sumPartBottom
+ sumPartRight;

console.log('total', total)

};



function main(){

	const array: [number, number, number, number][] = [
         [ 1, 2, 3, 4 ], 
         [ 5, 6, 7, 8 ], 
        [ 9, 10, 11, 12 ], 
        [ 13, 14, 15, 16 ]
     ];


	const n: number = 4;

	sumNonDiagonalPartsOfASquareMatrix(array, n); 
}

main();
