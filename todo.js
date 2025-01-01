// // 1. + 버튼 추가시 리스트에 할 일 추가
// // 2. 체크 박스 클릭시, 텍스트 더블클릭시시 할 일 취소선 생기게
// // 3. 삭제 아이콘 클릭시 할 일 삭제

  const todoInput = document.querySelector(".textinput");
  const addBtn = document.querySelector(".add_btn");
  const todoList = document.querySelector(".todo_list");

 // 입력란에 포커스 설정 해주기
  todoInput.focus();

  // 일정 추가 함수수
  function addTodo() {
    // 사용자가 입력한 값을 불필요한 공백을 제거하고 가져온다.
    let todoText = todoInput.value.trim();

    if (todoText === "") {
      alert("리스트를 입력해주세요."); // 일정을 입력하지 않고 추가할 때는 경고 메시지
    } else {
      // 새로운 todo 항목 생성
      let list = document.createElement("li");

      // todo 항목을 담을 박스 생성
      let todoListBox = document.createElement("div");
      todoListBox.className = "listBox"; //박스 클래스 지정

      // 체크박스 아이콘 생성
      let check = document.createElement("i");
      check.className = "fa-regular fa-circle nonchecked"; 

      // 텍스트 생성
      let text = document.createElement("span");
      text.className = "text";
      text.textContent = todoText; // 사용자 입력값을 텍스트로 지정해줌

      // 삭제 아이콘 생성
      let del = document.createElement("i");
      del.className = "fa-solid fa-trash-can";

      // 생성한 요소들 부모에 추가 : ul(todoList) > li(list) > div(todoListBox) > i , span, i 
      todoList.appendChild(list);
      list.appendChild(todoListBox);
      todoListBox.appendChild(check);
      todoListBox.appendChild(text);
      todoListBox.appendChild(del);

      // 추가해준 뒤에는 입력 필드 초기화
      todoInput.value = "";

      // 새로 생성된 요소에 이벤트 리스너 추가
      check.addEventListener("click", checkTodo); // 체크박스 클릭시
      text.addEventListener("dblclick", checkTodoClick); // 텍스트 더블 클릭시 
      del.addEventListener("click", delTodo); // 삭제 아이콘 클릭시
    }
  }

  // 추가 버튼 클릭시 이벤트 : addTodo함수 실행
  addBtn.addEventListener("click", addTodo);

  // enter 키 눌렀을 때 -> addTodo함수 실행
  todoInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      e.preventDefault(); 
      addTodo();
    }
  });

  // 체크 박스 클릭시 동작 함수 정의(토글 함수로)
  function checkTodo(e) {
    let check = e.target;
    let text = e.target.nextSibling; // 체크박스 바로 옆은 text 임!!!

    // 체크 안된 아이콘 상태 -> 체크된 아이콘으로 변경
    if (check.classList.contains("nonchecked")) {
      check.className = "fa-solid fa-circle-check checked"; // 아이콘 변경
      text.style.textDecoration = "line-through"; // 취소선
      text.style.color = "#bbba"; // 색상 변경
    // 체크된 아이콘 -> 체크 안된 아이콘으로 변경
    } else {
      check.className = "fa-regular fa-circle nonchecked";
      text.style.textDecoration = "none";
      text.style.color = "#333";
    }
  }

  // 할 일 텍스트 더블 클릭시 동작 함수 정의(토글 함수로)
  function checkTodoClick(e) {
    let text = e.target;
    let check = e.target.previousSibling; // 이전 요소는 체크 아이콘!!

    if (check.classList.contains("nonchecked")) {
      check.className = "fa-solid fa-circle-check checked";
      text.style.textDecoration = "line-through";
      text.style.color = "#bbba";
    } else {
      check.className = "fa-regular fa-circle nonchecked";
      text.style.textDecoration = "none";
      text.style.color = "#333";
    }
  }

  // 삭제 아이콘 클릭시 동작 함수 정의
  function delTodo(e) {
    let list = e.target.parentElement.parentElement; // 부모의 부모 요소인 li 항목 찾아옴
    list.remove(); // 해당 항목을 삭제함
  }


