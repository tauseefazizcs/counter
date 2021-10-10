const btns = document.querySelectorAll('.btn');
const counter = document.getElementById('counter');

let count = 0;

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList;

        if(styles.contains('increase')){
            count++ ;
        }else if(styles.contains('decrease')){
            count-- ;
        } else{
            count = 0;
        }

        
        if(count > 0){
            counter.style.color = 'blue';
        }else if(count<0){
            counter.style.color = 'red';
        }else{
            counter.style.color = 'gray';
        }
        counter.textContent = count;

        // console.log(count)
    });
    
});

