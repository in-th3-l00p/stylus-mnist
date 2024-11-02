// Allow `cargo stylus export-abi` to generate a main function.
#![cfg_attr(not(feature = "export-abi"), no_main)]
extern crate alloc;

use stylus_sdk::{console, prelude::*};

#[storage]
#[entrypoint]
struct NeuralNet;

#[public]
impl NeuralNet {
    fn user_main() -> i32 {
        -421000009
    }
}
