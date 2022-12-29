package sample1;
/*
    인스턴스를 직접 생성하여 메서드 호출
    - 강한 결합(높은 의존성)
    - 클래스에 변경이 생기면 코드를 수정해야 하는 범위가 넓어진다.
 */

public class HelloApp {
    public static void main(String[] args) {
        MessageBean bean = new MessageBean();
        bean.sayHello("App1");
    }
}
