const GET_INVOICES = "SELECT * FROM InvoicesAliatic";
const CREATE_INVOICE = "INSERT INTO InvoicesAliatic (Customer, InvoiceDate) VALUES (@customer, @date)";
const DELETE_INVOICE = "DELETE FROM InvoicesAliatic WHERE InvoiceId = @id";

module.exports = {
    GET_INVOICES,
    CREATE_INVOICE,
    DELETE_INVOICE
}