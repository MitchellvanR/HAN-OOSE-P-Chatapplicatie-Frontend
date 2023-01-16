import {createLocalVue, shallowMount} from '@vue/test-utils';
import chat from '@/views/chat';

const localVue = createLocalVue()

describe('chat.vue', () => {
    let wrapper;
    let getChatLog = jest.fn();
    let delay = jest.fn();

    function setWrapper() {
        wrapper = shallowMount(chat, {
            methods: {
                getChatLog,
                delay,
            },
            localVue
        })
    }

    it('is called chatPage', () => {
        setWrapper();
        expect(wrapper.name()).toEqual('chatPage');
    });

    it('calls getChatLog on mount', () => {
        setWrapper();
        expect(getChatLog).toBeCalled();
    });

    it('calls delay on mount', () => {
        setWrapper();
        expect(delay).toBeCalled();
    });
})