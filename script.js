const ctx= document.getElementById('barChart');

new Chart(
    ctx, {
        type: 'bar',
        data: {
            labels: ["Red", "Blue", "Yellow","Black"],
            dataset:[
                {
                    label: "Votes",
                    data: [12,19,3,10],
                    borderwidth: 2,
                    backGroundColor: [
                        'rgba(245, 40, 145, 0.8)',
                         'rgba(57, 177, 145, 0.8)', 
                         'rgba(223, 207, 37, 0.8)',
                        'rgba(43, 207, 37, 0.8)'],
                    borderColor: 'black'
                            
                }
            ]
        }
    }

)