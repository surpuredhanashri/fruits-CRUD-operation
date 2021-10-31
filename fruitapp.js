var selectedRow = null

function onFormSubmit()
{
    var formData = readFormData();
    if(selectedRow == null)
    {
        insertNewRecord(formData);
    }
    else
    {
        updateRecord(formData);
    }
    resetForm();
}
function readFormData()
{
    var formData = {};
    formData['fruitName'] = document.getElementById('fruitName').value;
    formData['quantity'] = document.getElementById('quantity').value;
    formData['id'] = document.getElementById('id').value;
    return formData;
}
function insertNewRecord(data)
{
    var table = document.getElementById('fruit-list').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fruitName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.quantity;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.id;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onClick="onEdit(this)" class="btn btn-success btn-sm edit"><i class="far fa-edit" style="pointer-events: none;"></i></a>`;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onClick="onDelete(this)" class="btn btn-danger btn-sm delete"><i class="far fa-trash-alt" style="pointer-events: none;"></i></a>`;
}
function resetForm()
{
    document.getElementById('fruitName').value = '';
    document.getElementById('quantity').value = '';
    document.getElementById('id').value = '';
    selectedRow = null;
}
function onEdit(td)
{
    selectedRow = td.parentElement.parentElement;
    document.getElementById('fruitName').value = selectedRow.cells[0].innerHTML;
    document.getElementById('quantity').value = selectedRow.cells[1].innerHTML;
    document.getElementById('id').value = selectedRow.cells[2].innerHTML;
}
function updateRecord(formData)
{
    selectedRow.cells[0].innerHTML = formData.fruitName;
    selectedRow.cells[1].innerHTML = formData.quantity;
    selectedRow.cells[2].innerHTML = formData.id;
}
function onDelete(td)
{
    row = td.parentElement.parentElement;
    document.getElementById('fruit-list').deleteRow(row.rowIndex);
    resetForm();
}



const searchfun = () =>{
    let filter = document.getElementById('myInput').value.toUpperCase();
    let myTable  = document.getElementById('fruit-list');
     let tr = myTable.getElementsByTagName('tr');

     for(var i = 0 ; i<tr.length; i++){
         let td = tr[i].getElementsByTagName('td')[0];

         if(td){
             let textvalue = td.textContent || td.innerHTML;
             if (textvalue.toUpperCase().indexOf(filter) > -1){
                 tr[i].style.display = "";
             }
             else{
                 tr[i].style.display = "none";
             }
         }


        }
}



function validateform(){  
    var name=document.RegForm.fruitName.value;  
    var quantity = document.RegForm.quantity.value;

    //fruit name
    if(name==""){
        document.getElementById('fruitNameerr').innerHTML="please fill the username field";
        return false;
    }
    else if(name.length<3){
        document.getElementById('fruitNameerr').innerHTML="Fruit name should be Greater than 3";
        return false;
    }
    else{
        document.getElementById('fruitNameerr').innerHTML="";
    }


    //quantity
    if(quantity==""){
        document.getElementById('quantityerr').innerHTML="please fill the quantity field";
        return false;
    }
    else if(quantity.length<2) {
        document.getElementById('quantityerr').innerHTML="quantity should be Greater than 2 digit";
        return false;
    }
    else{
        document.getElementById('quantityerr').innerHTML=""
    }

        onFormSubmit(); 

        
      return true;
    }  


    