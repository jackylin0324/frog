		//定義變數
var chartRadarDOM;
	var chartRadarData;
	var chartRadarOptions;
	
    	//載入雷達圖
	Chart.defaults.global.legend.display = false;
	Chart.defaults.global.defaultFontColor = 'rgba(0,0,74, 1)';
	chartRadarDOM = document.getElementById("chartRadar");
	chartRadarData;
	chartRadarOptions = 
	{
		scale: 
		{
			ticks: 
			{
				fontSize: 16,
				beginAtZero: true,
				maxTicksLimit: 7,
				min:0,
				max:100
			},
			pointLabels: 
			{
				fontSize: 25,
				color: '#0044BB'
			},
			gridLines: 
			{
				color: '#009FCC'
			}
		}
	};
	
	console.log("---------Rader Data--------");
	var graphData =new Array();
	graphData.push(100);
	graphData.push(40);
	graphData.push(65);
	graphData.push(20);
	graphData.push(97);
	
	
	console.log("--------Rader Create-------------");
	console.log(graphData);
		
	//CreateData
	chartRadarData = {
    		labels: ['STR', 'CON', 'INT', 'WIS', 'CHA'],
		datasets: [{
    			label: "Skill Level",
			backgroundColor: "rgba(17, 34, 51,0.8)",
			borderColor: "rgba(63,63,74,.8)",
			pointBackgroundColor: "rgba(63,63,74,1)",
   			 pointBorderColor: "rgba(0,0,0,0)",
			pointHoverBackgroundColor: "#fff",
			pointHoverBorderColor: "rgba(0,0,0,0.3)",
			pointBorderWidth: 5,
			data: graphData}]
	};
		
	//Draw
	var chartRadar = new Chart(chartRadarDOM, {
		type: 'radar',
		data: chartRadarData,
		options: chartRadarOptions
	});