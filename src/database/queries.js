const GET_INVOICES = "SELECT * FROM InvoicesAliatic"
const CREATE_INVOICE = "INSERT INTO InvoicesAliatic (Customer, InvoiceDate) VALUES (@customer, @date)"

module.exports = {
    GET_INVOICES,
    CREATE_INVOICE
}