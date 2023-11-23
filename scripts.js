function mostrarInfo(plan) {
    var modal = document.getElementById("modal");
    var infoDiv = document.getElementById("info");

    if (plan == 'normal'){
        var info = `
        <div class="js">
        <h2>Detalles del Plan ${plan}</h2>
        <p>El Plan ${plan} tiene una capacidad de internet limitada.</p>
        </div>`;

        infoDiv.innerHTML = info;
        modal.style.display = "block";
    }
    
    else if (plan == 'pro'){
        var info = `
        <div class="js">
        <h2>Detalles del Plan ${plan}</h2>
        <p>El Plan ${plan} tiene una capacidad de internet moderada.</p>
        </div>`;

        infoDiv.innerHTML = info;
        modal.style.display = "block";
    }

    else if (plan == 'premium'){
        var info = `
        <div class="js">
        <h2>Detalles del Plan ${plan}</h2>
        <p>El Plan ${plan} tiene una capacidad de internet muy buena.</p>
        </div>`
        ;

        infoDiv.innerHTML = info;
        modal.style.display = "block";
    }

    else{
        alert('NaN')
    }
}

function cerrarModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}


window.onclick = function(event) {
    var modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
