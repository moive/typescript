function generic<T>(value: T): T{
    return value;
}

generic<string>("Moises") // Explicit
generic(true) // Implicit