// Allow `cargo stylus export-abi` to generate a main function.
#![cfg_attr(not(feature = "export-abi"), no_main)]
extern crate alloc;

use alloy_primitives::I16;
/// Import items from the SDK. The prelude contains common traits and macros.
use stylus_sdk::{alloy_primitives::U256, prelude::*, storage::StorageI16};

// Define some persistent storage using the Solidity ABI.
// `Counter` will be the entrypoint.
sol_storage! {
    #[entrypoint]
    pub struct NeuralNet {
    }
}

#[storage]
pub struct Point {
    top: StorageI16,
    bot: StorageI16
}

/// Declare that `Counter` is a contract with the following external methods.
#[public]
impl NeuralNet {
    fn add(a: Point, b: Point) -> Point {
        let top = a.top.checked_add(b.top);
        let bota = a.bot;
        let botb = b.bot;
        let bot = bota.checked_add(botb.get()).unwrap();
    }
}
