"""
Test file for the Gemstone plugin.
This file contains basic tests to ensure the CI pipeline passes.
"""

import asyncio
from unittest.mock import Mock

# Mock the decky module since it's not available in the test environment
import sys
sys.modules['decky'] = Mock()

from main import Plugin


class TestPlugin:
    """Test cases for the Plugin class."""
    
    def setup_method(self):
        """Set up test fixtures before each test method."""
        self.plugin = Plugin()
    
    def test_add_method_sync(self):
        """Test the add method with positive numbers (synchronous wrapper)."""
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
        try:
            result = loop.run_until_complete(self.plugin.add(2, 3))
            assert result == 5
        finally:
            loop.close()
    
    def test_add_method_negative_numbers_sync(self):
        """Test the add method with negative numbers (synchronous wrapper)."""
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
        try:
            result = loop.run_until_complete(self.plugin.add(-1, -2))
            assert result == -3
        finally:
            loop.close()
    
    def test_add_method_zero_sync(self):
        """Test the add method with zero (synchronous wrapper)."""
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
        try:
            result = loop.run_until_complete(self.plugin.add(0, 5))
            assert result == 5
            
            result = loop.run_until_complete(self.plugin.add(10, 0))
            assert result == 10
        finally:
            loop.close()
    
    def test_add_method_mixed_numbers_sync(self):
        """Test the add method with mixed positive and negative numbers (synchronous wrapper)."""
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
        try:
            result = loop.run_until_complete(self.plugin.add(10, -3))
            assert result == 7
            
            result = loop.run_until_complete(self.plugin.add(-5, 8))
            assert result == 3
        finally:
            loop.close()


def test_plugin_instantiation():
    """Test that the Plugin class can be instantiated."""
    plugin = Plugin()
    assert plugin is not None
    assert isinstance(plugin, Plugin)


def test_module_import():
    """Test that the main module can be imported without errors."""
    import main
    assert hasattr(main, 'Plugin')
    assert callable(main.Plugin)


def test_basic_functionality():
    """Basic smoke test to ensure core functionality works."""
    plugin = Plugin()
    
    # Test that we can create an event loop and run async methods
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    try:
        # Test simple addition
        result = loop.run_until_complete(plugin.add(1, 1))
        assert result == 2
        
        # Test with larger numbers
        result = loop.run_until_complete(plugin.add(100, 200))
        assert result == 300
    finally:
        loop.close()