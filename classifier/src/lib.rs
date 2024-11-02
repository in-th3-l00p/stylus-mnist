// Allow `cargo stylus export-abi` to generate a main function.
#![cfg_attr(not(feature = "export-abi"), no_main)]
extern crate alloc;

/// Import items from the SDK. The prelude contains common traits and macros.
use stylus_sdk::{console, prelude::*};

// Define some persistent storage using the Solidity ABI.
// `NeuralNet` will be the entrypoint.
#[storage]
#[entrypoint]
struct NeuralNet;

#[public]
impl NeuralNet {
    fn user_main() -> i32 {
        -421000009
    }
}
