export function get(selection) {
    const element = document.querySelector(selection)
    if (element) {
        return element
    } else {
        throw new Error(`'${selection}' is not defined`)
    }
}

export function getAll(selection) {
    const element = document.querySelectorAll(selection)
    if (element.length > 1) {
        return element
    } else {
        throw new Error(`'${selection}' is not defined or is not iterable`)
    }
}

export async function getUserData(url) {
    try {
        const data = await fetch(url)
        const obj = await data.json()
        const {
            picture: { large: profilePic },
            name: { first: firstName, last: lastName },
            email,
            dob: { age },
            location: {
                state,
                street: { name: streetName, number: streetNo },
            },
            cell: phoneNo,
            login: { password },
        } = obj.results[0]
        return {
            profilePic,
            name: `${firstName} ${lastName}`,
            email,
            age,
            address: `${streetNo} ${streetName} ${state}`,
            phoneNo,
            password,
        }
    } catch (error) {
        console.log(error);
    }
}
