// 1 შევქმნათ ფუნქცია, რომელიც დააბრუნებს ორი გადაცემული მატრიცის ( 2D მასივის ) ჯამს. მაგ:
// [[1,3],[1,4]], [[4,1],[2,2]] —> [[5,4],[5,5]]

function addMatrices(matrix1, matrix2) {
    
    const rows = matrix1.length;
    const cols = matrix1[0].length;
    
    
    const result = [];
    
    
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        row.push(matrix1[i][j] + matrix2[i][j]);
      }
      result.push(row);
    }
    
    return result;
  }
  
  
  const matrix1 = [
    [1, 3],
    [1, 4]
  ];
  const matrix2 = [
    [4, 1],
    [2, 2]
  ];
  
  const result = addMatrices(matrix1, matrix2);
  console.log(result); 
  
  
//2) შევქმნათ ფუნქცია რომელიც გადაცემულ მატრიცას გაუცვლის რიგებს და სვეტებს
function diagonalSums(matrix) {
    const n = matrix.length;
    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
  
    for (let i = 0; i < n; i++) {
      mainDiagonalSum += matrix[i][i];  
      secondaryDiagonalSum += matrix[i][n - i - 1];  
    }
  
    return [mainDiagonalSum, secondaryDiagonalSum];
  }
  
  
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  const [mainDiagonal, secondaryDiagonal] = diagonalSums(matrix);
  console.log(mainDiagonal, secondaryDiagonal);  
  