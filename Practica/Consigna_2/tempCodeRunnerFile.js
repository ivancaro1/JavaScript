console.group('deleteAll');
        await carrito.deleteAll()
        console.log(await carrito.getAll())
    console.groupEnd();