function buttonPressed(value){
    document.getElementById("divToWrite").innerHTML = value

}

        function add(){
            const x = Number(document.getElementById('input1').value)
            const y = Number(document.getElementById('input2').value)
            alert(x + y)
        }
        function sub(){
            const x = Number(document.getElementById('input1').value)
            const y = Number(document.getElementById('input2').value)
            alert(x - y)
        }
        function myAlert(message){
            let alert2 = document.getElementById('input1').value
            document.getElementById("divToWrite").innerHTML = alert2
        }
