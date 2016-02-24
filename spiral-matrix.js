function test_yo() {
	// please write a function that
	// iterates the 2d array in a counter clockwise direction
	 // until all elements are exhausted
	 // starting at i,j at (0,0), we will print out 0, 4, 8, 9, 10, 11, 7, 3 ,2, 1, 5, 6

	var array2d = [
	 [ 0, 1, 2, 3 ],
	 [ 4, 5, 6, 7 ],
	 [ 8, 9, 10, 11 ]]

	// flag matrix to check whether element is printed or not
	var isDone = [
		[0,0,0,0],
		[0,0,0,0],
		[0,0,0,0]    
	] 

	// for col=0 is fixed 0,0 -> 1,0, 2,0

		// row=2 is fixed  2,1 2,2 2,3 

		// col=3 is fixed 3,1 3,0

		// row = 0 is fixed 0,2 0,1 

		// col=1 is fixed 1,1

		// row=1 is fixed 1,2 1,3 

	var i,j;
	var startI=0, startJ=0;
	var direction = "DOWN";
	var dirtyBit=0;

	iLimitPlus = 3;
	iLimitMinus = 0;
	jLimitPlus = 4;
	jLimitMinus = 1;

	do {
		switch(direction) {
			case "DOWN":
				flag = 0;
				j=startJ;
				for(i=startI;i<iLimitPlus;i++) {
					if(!isDone[i][j]) {
						console.log(array2d[i][j]);
						flag=1;
						isDone[i][j]=1;
					}
				}
				if(!flag) {
					dirtyBit=1;
				}
				direction="RIGHT";
				startJ++;
				startI=i-1;
				iLimitPlus=i-1;
				break;
			case "RIGHT":
				flag=0;
				i=startI;
				for(j=startJ;j<jLimitPlus;j++) {
					if(!isDone[i][j]) {
						console.log(array2d[i][j]);
						isDone[i][j]=1;
						flag=1;
					}
				}
				if(!flag) {
					dirtyBit=1;
				}
				direction="UP";
				startI--;
				startJ=j-1;
				jLimitPlus=j-1;
				break;
			case "UP":
				flag=0
				j=startJ;
				for(i=startI;i>=iLimitMinus;i--) {
					if(!isDone[i][j]) {
						console.log(array2d[i][j]);
						isDone[i][j]=1;
						flag=1;
					}
				}

				if(!flag) {
					dirtyBit=1;
				}

				direction="LEFT";
				startJ--;
				startI=i+1;
				iLimitMinus=startI;
				break;
			case "LEFT":
				flag=0;
				i=startI;

				for(j=startJ;j>=jLimitMinus;j--) {
					if(!isDone[i][j]) {
						console.log(array2d[i][j]);
						isDone[i][j]=1;
						flag=1;
					}
				}


				if(!flag) {
					dirtyBit=1;
				}

				startI++;
				startJ=j+1;
				jLimitMinus=startJ;
				direction="DOWN";
				break;
		}
	} while(!dirtyBit);    
	return;
}
