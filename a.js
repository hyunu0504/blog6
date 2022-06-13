const box = document.querySelector('.container');


function addColor2(e){
    console.log(e.target) // 실제 클릭한 요소
    console.log(e.currentTarget) // 이벤트가 등록된 요소
    let click = e.target; // 실제 클릭한 요소를 click이라는 변수에 담음
    if( click.tagName == "A" ){ // 클릭한 요소의 tag네임이 a태그라면
        click = click.parentElement //클릭한 요소를 그 요소의 부모요소로 선택
    }
    if( click.tagName == "SPAN" ){ // 클릭한 요소의 tag네임이 a태그라면
        click = click.parentElement //클릭한 요소를 그 요소의 부모요소로 선택
    }
    else if( click == e.currentTarget ){ //클릭한 요소가 이벤트가 등록된 요소면
        return; // 리턴함
    }
    for( c of box.children ){ //box안의 자식들을 c인자로 받음
        c.classList.remove('on') //그 요소의 on이라는 클래스를 제거
    }
    click.classList.add('on') //클릭한 요소에 on 클래스 추가
}

box.addEventListener('click', addColor2);
