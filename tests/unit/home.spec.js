import {createLocalVue, shallowMount} from '@vue/test-utils';
import menu from '@/views/home';
import sinon from 'sinon';

const localVue = createLocalVue();

describe('home.vue', () => {
    let wrapper;
    const listener = sinon.spy();

    function setWrapper() {
        wrapper = shallowMount(menu, {
            localVue
        });
    }

    it('Is called homePage', () => {
        setWrapper();
        expect(wrapper.name()).toEqual('homePage');
    });

    it('check if setUserId is called after click button user', () => {
        setWrapper();
        wrapper.find('#user').trigger('click');
        expect(listener.called);
    });

    it('check if setUserId is called after click button administrator', () => {
        setWrapper();
        wrapper.find('#administrator').trigger('click');
        expect(listener.called);
    });
});