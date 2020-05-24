import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
      const component = create(<ProfileStatus status="It-kamasutra.com" />);
      const instance = component.getInstance();
      expect(instance.state.status).toBe("It-kamasutra.com");
    });

    test("span must be avelaible", () => {
        const component = create(<ProfileStatus status="It-kamasutra.com" />);
        const instance = component.root;
        const span = instance.findByType('span');
        expect(span).not.toBeNull();
      });
    
      test("input must not be avelaible", () => {
        const component = create(<ProfileStatus status="It-kamasutra.com" />);
        const instance = component.root;
        expect(() => instance.findByType('input')).toThrow(); // input нет пробрасывает ошибку и проходит темт
      });

      test("in span must be description from props", () => {
        const component = create(<ProfileStatus status="It-kamasutra.com" />);
        const instance = component.root;
        const span = instance.findByType('span');
        expect(span.children[0]).toBe('It-kamasutra.com');
      });

      test("input should be displayed insted of span", () => {
        const component = create(<ProfileStatus status="It-kamasutra.com" />);
        const instance = component.root;
        const span = instance.findByType('span');
        span.props.onDoubleClick();
        const input = instance.findByType('input');
        expect(input.props.value).toBe('It-kamasutra.com');
      });

      test("callback should be called", () => {
        const mockCallback = jest.fn(); 
        const component = create(<ProfileStatus status="It-kamasutra.com" updateStatus = {mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
      });
});