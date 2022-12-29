package sample2;
/*
    인터페이스와 구현클래스를 분리하여 HelloApp이 받는 영향을 최소화
    인터페이스에서 구현한 메서드는 모든 구현클래스에서 구현이 보장된다.
 */

public class HelloApp {
    public static void main(String[] args) {
        MessageBean bean = new MessageBeanKr();
        bean.sayHello("앱2");
    }
}
