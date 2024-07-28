"use server";

const login = async(formData: FormData) => {
    console.log('VALUE --> ', formData.get('email'))
}

export default login;