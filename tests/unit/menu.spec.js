import {createLocalVue, shallowMount} from "@vue/test-utils";
import chatList from "@/views/menu";
import sinon from "sinon";

const localVue = createLocalVue();

describe('menu.vue', () => {
    let wrapper;
    const listener = sinon.spy();
    let setHelplineChat = jest.fn();
    let savePublicKey = jest.fn();
    let createChat = jest.fn();
    let getAnnouncements = jest.fn();
    let getAllChatsFromUser = jest.fn();

    function setWrapper() {
        wrapper = shallowMount(chatList, {
            methods: {
                setHelplineChat,
                savePublicKey,
                createChat,
                getAnnouncements,
                getAllChatsFromUser
            },
            localVue
        });
    }

    it('is called menuPage', () => {
        setWrapper();
        expect(wrapper.name()).toEqual('menuPage');
    });

    it('calls setHelplineChat on mount',  () => {
        setWrapper();
        expect(setHelplineChat).toBeCalled();
    });

    it('calls savePublicKey on mount',  () => {
        setWrapper();
        expect(savePublicKey).toBeCalled();
    });

    it('calls createChat on mount',  () => {
        setWrapper();
        expect(createChat).toBeCalled();
    });

    it('calls getAnnouncements on mount',  () => {
        setWrapper();
        expect(getAnnouncements).toBeCalled();
    });

    it('calls getAllChatsFromUser on mount',  () => {
        setWrapper();
        expect(getAllChatsFromUser).toBeCalled();
    });

    it('check if setChatId is called after click button', () => {
        setWrapper();
        wrapper.find('.btn').trigger('click');
        expect(listener.called);
    });
});