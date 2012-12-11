var generatePrimes = function (maxValue) {

    if (maxValue > 2) {

        // Declarar variables
        var s = maxValue + 1; //Tamano del arreglo
        var f = new Array(s); //Arreglo de booleanos
        var i;

        // Inicializar arreglo
        for (i = 0; i < s; i++)
            f[i] = true;

        // Eliminar no primos conocidos
        f[0] = f[1] = false;

        // sieve
        var j;
        for (i = 2; i < Math.sqrt(s) + 1; i++) {
            if (f[i]) {
                // Si no esta cruzado, entonces eliminar sus multiplos
                for (j = 2 * i; j < s; j += i) {
                    f[j] = false;
                }
            }
        }

        // Contar primos
        count = 0;
        for (i = 0; i < s; i++) {
            if (f[i])
                count++;
        }

        primes = new Array(count);

        // mover primos al resultado
        for (i = 0, j = 0; i < s; i++) {
            // Si es primo
            if (f[i])
                primes[j++] = i;
        }
        return primes;
    }
    else {
        // maxValue < 2
        return new Array(0);
    }
}