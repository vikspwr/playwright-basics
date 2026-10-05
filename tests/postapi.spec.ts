import { expect, test } from '@playwright/test'
import { faker } from '@faker-js/faker'
import addBook from '../addBook.json' with {type: "json"}

type APIResponseBody = {
    Msg: string,
    ID: string
}

test.use({
    baseURL: "http://216.10.245.166"
})

test('Add Book using API', async ({ request }) => {

    const isbn = faker.string.alpha(5);
    const aisle = faker.number.int({ min: 100, max: 999 });

    const payloadData = {
        ...addBook,
        isbn,
        aisle
    }

    const addBookresponse = await request.post("/Library/Addbook.php", {
        data: payloadData
    })

    console.log(await addBookresponse.json());

    const addBookResponseBody: APIResponseBody = await addBookresponse.json();

    expect(addBookresponse.ok()).toBeTruthy();
    expect(addBookresponse.status()).toBe(200);

    if (addBookResponseBody.Msg == 'successfully added') {
        expect(addBookResponseBody.Msg).toBe("successfully added");
    }
    else {
        expect(addBookResponseBody.Msg).toBe("Book Already Exists");
    }


})

test('Get Book using ID', async ({ request }) => {


    const id = "dips111";
    const getBookresponse = await request.get(`Library/GetBook.php?ID=${id}`)

    console.log(await getBookresponse.json());

    expect(getBookresponse.ok()).toBeTruthy();
    expect(getBookresponse.status()).toBe(200);


})

test('Delete Book', async ({ request }) => {

    const deleteBookresponse = await request.post(`/Library/DeleteBook.php`, { data: { ID: "priyanka11234" } });

    console.log(await deleteBookresponse.json());

    expect(deleteBookresponse.ok()).toBeTruthy();
    expect(deleteBookresponse.status()).toBe(200);


})